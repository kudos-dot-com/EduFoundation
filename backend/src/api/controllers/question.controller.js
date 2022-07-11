const { questionService } = require("../services/question.services");
const { QuestionSchema } = require("../validators/question.validator");
const { response, incompleteField } = require("../helpers/response");
const examModel = require("../models/exams.models");
const chapterModel = require("../models/chapter.model");
const subjectModel = require("../models/subjects.model");
const topicModel = require("../models/topic.model");
const cache = require("../redis/cacheQuestion");
const getcache = require("../redis/getcachedQuestion");
var xlsxtojson = require("xlsx-to-json-lc");

class Question {
  async addQuestion(req, res) {
    try {
      // const result = await QuestionSchema.validateAsync(req.body);
      //console.log(result);

      // sanitizing the code
      const { chapter, subject, exam, topic } = req.body;
      console.log(req.body);
      const getSubject = await subjectModel.findOne({ name: subject });

      if (!getSubject) {
        return response(res, "", "subject does not exists", 403);
      }

      const getChapter = await chapterModel.findOne({
        name: chapter,
        subject: getSubject._id,
      });

      if (!getChapter) {
        return response(res, "", "chapter does not exists", 403);
      }

      const getTopic = await topicModel.findOne({
        name: topic,
        subject: getSubject._id,
      });

      if (!getChapter) {
        return response(res, "", "chapter does not exists", 403);
      }

      const question = await questionService.addQuestion(
        res,
        getSubject,
        getChapter,
        getTopic,
        req.body
      );
      if (question) {
        return response(res, question, "added question successfully", 200);
      }
    } catch (err) {
      console.log(err);
      return response(res, "", "some error has occured", 500);
    }
  }
  //not needed
  async getQuestion(req, res) {
    const { subject } = req.params;
    const getCache = await getcache.getSubjectQuestion(subject);
    return response(res, getCache, "success fetching all subject", 200);
  }
  async getQuestionSubjectwise(req, res) {
    const { subject } = req.params;
    const question = await questionService.getQuestionSubjectwise(
      res,
      subject,
      req.query
    );

    return response(res, question, "fetched question successfully", 200);
  }
  async getQuestionChapterwise(req, res) {
    const { subject, chapter } = req.params;
    const question = await questionService.getQuestionChapterwise(
      res,
      subject,
      chapter,
      req.query
    );

    return response(res, question, "fetched question successfully", 200);
  }
  async getQuestionExamwise(req, res) {
    const { exam } = req.params;
    const question = await questionService.getQuestionExamwise(
      res,
      exam,
      req.query
    );

    return response(res, question, "fetched question successfully", 200);
  }

  async getQuestionTopicwise(req, res) {
    const { subject, topic, level } = req.params;
    const question = await questionService.getQuestionTopicwise(
      res,
      subject,
      topic,
      level,
      req.query
    );

    return response(res, question, "fetched question successfully", 200);
  }
  async getQuestionRandomTopicwise(req, res) {
    const { subject, topic, level } = req.params;
    const question = await questionService.getQuestionRandomTopicwise(
      res,
      subject,
      topic,
      level,
      req.query
    );

    return response(res, question, "fetched question successfully", 200);
  }
  async bulkUpload(req, res, next) {
    try {
      // const file = req.files.file;
      // console.log(req.file);
      xlsxtojson(
        {
          input: req.file.path,
          output: null, //since we don't need output.json
          lowerCaseHeaders: true,
        },
        async function (err, result) {
          if (err) {
            return response(res, "", "something went wrong", 500);
          }
          console.log(result);
          await questionService.formatJson(result, req.body.subject, res);
        }
      );
    } catch (e) {
      return res.json({ error_code: 1, err_desc: err, data: null });
    }
  }
  
}

const questionController = new Question();
module.exports = questionController;
