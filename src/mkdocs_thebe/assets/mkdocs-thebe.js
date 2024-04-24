document$.subscribe(function () {

    // Add the data-executable attribute to all code blocks to thebe can find them
    document.querySelectorAll('code').forEach(function (code) {
        code.setAttribute('data-executable', 'true');
    });

    var bootstrapThebe = function () {
        // the clipboard feature will clash with thebe so we remove the buttons
        document.querySelectorAll('.md-clipboard').forEach(function (button) {
            button.remove();
        });

        document.querySelectorAll('.run-code-btn').forEach(function (button) {
            button.remove();
        });

        thebelab.bootstrap();
    }


    // NOTE: for this to work we need markdown_extensions.pymdownx.highlight with
    // pygments_lang_class: true
    // otherwise the language-python class is not added to the code block
    document.querySelectorAll('div.language-python.highlight').forEach(function (div) {
        var pre = div.querySelector('pre');
        var button = document.createElement('button');
        button.classList.add('run-code-btn', 'play-btn');
        button.addEventListener('click', bootstrapThebe)
        pre.appendChild(button);
    });



    document.querySelector("#activate-interactivity").addEventListener('click', bootstrapThebe)


})
