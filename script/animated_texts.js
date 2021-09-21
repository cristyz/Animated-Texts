function WordsRandomPlaces(defaultt) {
    defaultt.force = defaultt.force || 300;
    defaultt.delay_time = defaultt.delay_time || 1000;
    defaultt.direction = defaultt.direction || ['x', 'y'];
    defaultt.animation_duration = defaultt.animation_duration || 250;
    const the_text = document.querySelector(defaultt.element);
    const the_text_words = the_text.textContent.split(' ');
    the_text.innerHTML = '';
    the_text_words.forEach((word) => {
        if (word) {
            const div = document.createElement('div');
            div.innerText = word;
            div.style.margin = '0 5px 0 0';
            div.style.display = 'inline-block';
            div.style.transition = `${defaultt.animation_duration}ms cubic-bezier(0.68,-1.55,0.27,1.55)`;
            div.style.transform = RandomTranslateValue(defaultt.direction, defaultt.force);
            the_text.append(div);
        }
    });
    setTimeout(() => {
        const all_divs = document.querySelectorAll(`${defaultt.element} div`);
        all_divs.forEach((div) => {
            div.style.transform = `translate(0px, 0px)`;
        });
    }, defaultt.delay_time);
}
function LettersRandomPlaces(defaultt) {
    defaultt.force = defaultt.force || 300;
    defaultt.delay_time = defaultt.delay_time || 1000;
    defaultt.direction = defaultt.direction || ['x', 'y'];
    defaultt.animation_duration = defaultt.animation_duration || 250;
    const the_text = document.querySelector(defaultt.element);
    const the_words = the_text.innerText.split(' ');
    the_text.innerHTML = '';
    the_words.forEach((word) => {
        const div = document.createElement('div');
        div.style.display = 'inline-block';
        div.style.margin = '0 5px 0 0';
        word.split('').forEach((letter) => {
            const span = document.createElement('span');
            span.innerText = letter;
            span.style.display = 'inline-block';
            span.style.transition = `${defaultt.animation_duration}ms cubic-bezier(0.68,-1.55,0.27,1.55)`;
            span.style.transform = RandomTranslateValue(defaultt.direction, defaultt.force);
            div.append(span);
        });
        the_text.append(div);
    });
    setTimeout(() => {
        document.querySelectorAll(`${defaultt.element} div span`).forEach((span) => {
            span.style.transform = `translate(0px, 0px)`;
        });
    }, defaultt.delay_time);
}
function RandomTranslateValue(direction, force) {
    const plus_or_minus = Math.random() < 0.5 ? -1 : 1;
    const d = direction;
    if (d[0] === 'x' && d[1] === 'y' || d[0] === 'y' && d[1] === 'x') {
        return `translate(${(plus_or_minus * Math.random()) * force}px, ${(plus_or_minus * Math.random()) * force}px)`;
    }
    else if (d.length === 1 && d[0] === 'x') {
        return `translate(${(plus_or_minus * Math.random()) * force}px, 0)`;
    }
    else if (d.length === 1 && d[0] === 'y') {
        return `translate(0, ${(plus_or_minus * Math.random()) * force}px)`;
    }
}
