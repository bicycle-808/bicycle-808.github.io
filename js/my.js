document.onkeydown = function (e) {
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return btf.snackbarShow("本站点禁止打开控制台。如有疑问请联系站长！(*^_^*)"), event.keyCode = 0, event.returnValue = !1, !1
};