function removeTagAndEscape(text) {
  const removedTag = text.replace(/(<([^>]+)>)/gi, "");
  return removedTag.replace("&nbsp;", "")
    .replace("&hellip;", "... ");
}

export {
  removeTagAndEscape
};
