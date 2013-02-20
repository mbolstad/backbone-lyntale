$(function () {
        $("form").submit(function () {
            return false;
        })
        $(":not(script)[data-template]").each(function () {
            var templateContent = $("script[data-template=" + $(this).attr("data-template") + "]").html();
            $(this).html(typeof $(this).attr("data-escape") !== 'undefined' ? templateContent.replace(/</g, "&lt;").replace(/>/g, "&gt;") : "<div>" + templateContent + "</div");
        });
    });