function response(res, result, message, code) {
  if (result == "" && code != 200) {
    return res.status(code).json({ message, code, result: null });
  } else {
    return res.status(code).json({ message, code, result });
  }
}

function incompleteField(res) {
    return res
      .status(403)
      .json({ message: "incomplete fields", code: 403, result: null });
}

module.exports = { response, incompleteField };
