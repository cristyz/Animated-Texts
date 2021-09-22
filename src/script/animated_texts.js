function WordsRandomPlaces(defaultt) {
    defaultt.force = defaultt.force || 300;
    defaultt.start_delay_time = defaultt.start_delay_time || 250;
    defaultt.direction = defaultt.direction || ['x', 'y'];
    defaultt.animation_duration = defaultt.animation_duration || 1500;
    defaultt.delay_type = defaultt.delay_type || 'sequential';
    defaultt.random_scale = defaultt.random_scale || false;
    const the_text = document.querySelector(defaultt.element);
    const the_text_words = the_text.textContent.split(' ');
    the_text.innerHTML = '';
    the_text_words.forEach((word, index) => {
        if (word) {
            const div = document.createElement('div');
            div.innerText = word;
            div.style.margin = '0 5px 0 0';
            div.style.display = 'inline-block';
            div.style.transition = `${defaultt.animation_duration}ms cubic-bezier(0.68,-1.55,0.27,1.55)`;
            div.style.transitionDelay = ChooseTypeDelay(defaultt.delay_type, index);
            div.style.transform = `${RandomTranslateValue(defaultt.direction, defaultt.force)} ${RandomScale(defaultt.random_scale)}`;
            the_text.append(div);
        }
    });
    setTimeout(() => {
        const all_divs = document.querySelectorAll(`${defaultt.element} div`);
        all_divs.forEach((div) => {
            div.style.transform = `translate(0px, 0px)`;
        });
    }, defaultt.start_delay_time);
}
function LettersRandomPlaces(defaultt) {
    defaultt.force = defaultt.force || 300;
    defaultt.start_delay_time = defaultt.start_delay_time || 250;
    defaultt.direction = defaultt.direction || ['x', 'y'];
    defaultt.animation_duration = defaultt.animation_duration || 1500;
    defaultt.delay_type = defaultt.delay_type || 'sequential';
    defaultt.random_scale = defaultt.random_scale || false;
    const the_text = document.querySelector(defaultt.element);
    const the_words = the_text.innerText.split(' ');
    the_text.innerHTML = '';
    the_words.forEach((word, index_word) => {
        const div = document.createElement('div');
        div.style.display = 'inline-block';
        div.style.margin = '0 5px 0 0';
        word.split('').forEach((letter) => {
            const span = document.createElement('span');
            span.innerText = letter;
            const s = span.style;
            s.display = 'inline-block';
            s.transform = `${RandomTranslateValue(defaultt.direction, defaultt.force)} ${RandomScale(defaultt.random_scale)}`;
            s.transition = `${defaultt.animation_duration}ms cubic-bezier(0.68,-1.55,0.27,1.55)`;
            s.transitionDelay = ChooseTypeDelay(defaultt.delay_type, index_word);
            div.append(span);
        });
        the_text.append(div);
    });
    setTimeout(() => {
        document.querySelectorAll(`${defaultt.element} div span`).forEach((span) => {
            span.style.transform = `translate(0px, 0px)`;
        });
    }, defaultt.start_delay_time);
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
function RandomScale(random_scale) {
    if (random_scale === true) {
        return `scale(${Math.random() * 1.5 + 0.5})`;
    }
    else if (typeof random_scale === 'number') {
        return `scale(${random_scale})`;
    }
    else {
        return `scale(1)`;
    }
}
function ChooseTypeDelay(type, index) {
    switch (type) {
        case 'none':
            return '0s';
        case 'random':
            return `${Math.random() * 8}s`;
        case 'sequential':
            return `${(index * 0.10).toFixed(1)}s`;
    }
}
