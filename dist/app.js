"use strict";
const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'Joe',
    messages: {
        error: 'Error',
        success: 'Success',
    },
};
const createError = (msg) => {
    throw new Error(msg);
};
function logBrtMsg({ isBirthdayData, userNameData, ageData, messages: { error, success }, }) {
    if (isBirthdayData === true) {
        return `Congrats ${userNameData.toLowerCase()}, age: ${ageData + 1} ${success}!!!`;
    }
    else if (isBirthdayData === false) {
        return 'too bad';
    }
    return createError(error);
}
var TypesOfMedia;
(function (TypesOfMedia) {
    TypesOfMedia["VIDEO"] = "video";
    TypesOfMedia["AUDIO"] = "audio";
})(TypesOfMedia || (TypesOfMedia = {}));
var FormatsOfMedia;
(function (FormatsOfMedia) {
    FormatsOfMedia["MP4"] = ".mp4";
    FormatsOfMedia["MOV"] = ".mov";
    FormatsOfMedia["MKV"] = ".mkv";
    FormatsOfMedia["FLV"] = ".flv";
    FormatsOfMedia["WEBM"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia({ name, type, format, subtitles, marks } = {
    name: 'example',
    type: TypesOfMedia.AUDIO,
    format: FormatsOfMedia.FLV,
}) {
    let marksLog;
    if (Array.isArray(marks)) {
        marksLog = marks.join(', ');
    }
    else if (typeof marks === 'string') {
        marksLog = marks;
    }
    else {
        marksLog = 'Unsupported type of marks';
    }
    console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? 'none'}`);
    return 'Media started';
}
playMedia({
    name: 'WoW',
    format: FormatsOfMedia.MP4,
    type: TypesOfMedia.VIDEO,
    subtitles: 'hmhmhm hmhmhm doh',
    marks: ['4:30', '5:40'],
});
//# sourceMappingURL=app.js.map