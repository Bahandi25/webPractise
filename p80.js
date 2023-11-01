document.addEventListener('DOMContentLoaded', function () {
    const paragraph = document.getElementById('paragraph');
    const words = paragraph.innerHTML.split(/\s+/);
    const highlightedText = words.map(word => word.length > 8 ? `<span class="highlight">${word}</span>` : word).join(' ');
    paragraph.innerHTML = highlightedText;

    const sourceLink = document.createElement('a');
    sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
    sourceLink.textContent = "Source";
    document.body.appendChild(sourceLink);

    const sentences = paragraph.innerHTML.split('. ');
    const formattedText = sentences.join('.<br>');
    paragraph.innerHTML = formattedText;

    const wordCount = words.length;
    const heading = document.querySelector('h1');
    heading.insertAdjacentHTML('afterend', `<p>Total Words: ${wordCount}</p>`);

    const replacedText = paragraph.innerHTML.replace(/\?/g, '🤔').replace(/!/g, '😯');
    paragraph.innerHTML = replacedText;
});
