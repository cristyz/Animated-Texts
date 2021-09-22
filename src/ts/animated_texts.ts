interface IWordsRandomPlaces {
    element: string;
    force?: number;
    start_delay_time?: number;
    delay_type?: 'none' | 'random' | 'sequential';
    direction?: Array<string>;
    animation_duration?: number;
    random_scale?: boolean | number;
}

function WordsRandomPlaces(defaultt: IWordsRandomPlaces) {
    // default values
    defaultt.force = defaultt.force || 300; defaultt.start_delay_time = defaultt.start_delay_time || 250; defaultt.direction = defaultt.direction || ['x', 'y']; defaultt.animation_duration = defaultt.animation_duration || 1500; defaultt.delay_type = defaultt.delay_type || 'sequential'; defaultt.random_scale = defaultt.random_scale || false;
    // end default values

    // get the text and words
    const the_text: HTMLElement = document.querySelector(defaultt.element);
    const the_text_words: Array<string> = the_text.textContent.split(' ')
    // end get the text and words

    // text processing
    the_text.innerHTML = ''
    // end text processing

    // create and configure div for each word
    the_text_words.forEach((word: string, index) => {

        // condition for removing divs with only whitespace
        if (word) {
            const div = document.createElement('div')
            div.innerText = word

            // div style
            div.style.margin = '0 5px 0 0'
            div.style.display = 'inline-block'
            div.style.transition = `${defaultt.animation_duration}ms cubic-bezier(0.68,-1.55,0.27,1.55)`
            div.style.transitionDelay = ChooseTypeDelay(defaultt.delay_type, index)
            div.style.transform = `${RandomTranslateValue(defaultt.direction, defaultt.force)} ${RandomScale(defaultt.random_scale)}`
            // end div style

            the_text.append(div)
        }
    });
    // end create and configure div for each word

    // set all divs to translate(0px, 0px) after choose time
    setTimeout(() => {
        const all_divs = document.querySelectorAll(`${defaultt.element} div`)

        all_divs.forEach((div: HTMLElement) => {
            div.style.transform = `translate(0px, 0px)`
        })
    }, defaultt.start_delay_time)
    // end set all divs to translate(0px, 0px) after choose time
}

function LettersRandomPlaces(defaultt: IWordsRandomPlaces) {
    // default values
    defaultt.force = defaultt.force || 300; defaultt.start_delay_time = defaultt.start_delay_time || 250; defaultt.direction = defaultt.direction || ['x', 'y']; defaultt.animation_duration = defaultt.animation_duration || 1500; defaultt.delay_type = defaultt.delay_type || 'sequential'; defaultt.random_scale = defaultt.random_scale || false;
    // end default values

    // get the text and words
    const the_text: HTMLElement = document.querySelector(defaultt.element);
    const the_words = the_text.innerText.split(' ')
    // end get the text and words

    // text processing
    the_text.innerHTML = ''
    // end text processing

    // create and configure div for each word
    the_words.forEach((word: any, index_word) => {

        const div = document.createElement('div')
        div.style.display = 'inline-block'
        div.style.margin = '0 5px 0 0'

        // create and configure span for each letter
        word.split('').forEach((letter: string) => {
            const span = document.createElement('span')
            span.innerText = letter

            // span style
            const s = span.style
            s.display = 'inline-block'
            s.transform = `${RandomTranslateValue(defaultt.direction, defaultt.force)} ${RandomScale(defaultt.random_scale)}`
            s.transition = `${defaultt.animation_duration}ms cubic-bezier(0.68,-1.55,0.27,1.55)`
            s.transitionDelay = ChooseTypeDelay(defaultt.delay_type, index_word)
            // end span style

            div.append(span)
        })
        // end create and configure span for each letter

        the_text.append(div)
    })
    // end create and configure div for each word

    // set all spans to translate(0px, 0px) after choose time
    setTimeout(() => {
        document.querySelectorAll(`${defaultt.element} div span`).forEach((span: HTMLElement) => {
            span.style.transform = `translate(0px, 0px)`
        })
    }, defaultt.start_delay_time)
    // end set all spans to translate(0px, 0px) after choose time
}



function RandomTranslateValue(direction: Array<string>, force: number) {
    const plus_or_minus = Math.random() < 0.5 ? -1 : 1;

    const d = direction

    // conditions based on parameters defaultt.direction = ['x', 'y'] || ['y', 'x'] || JUST ['x'] || JUST ['y']
    if (d[0] === 'x' && d[1] === 'y' || d[0] === 'y' && d[1] === 'x') {
        return `translate(${(plus_or_minus * Math.random()) * force}px, ${(plus_or_minus * Math.random()) * force}px)`
    } else if (d.length === 1 && d[0] === 'x') {
        return `translate(${(plus_or_minus * Math.random()) * force}px, 0)`
    } else if (d.length === 1 && d[0] === 'y') {
        return `translate(0, ${(plus_or_minus * Math.random()) * force}px)`
    }

}
function RandomScale(random_scale: boolean | number) {
    if (random_scale === true) {
        return `scale(${Math.random() * 1.5 + 0.5})`
    } else if (typeof random_scale === 'number') {
        return `scale(${random_scale})`
    } else {
        return `scale(1)`
    }
}
function ChooseTypeDelay(type: string, index: number) {
    switch (type) {
        case 'none':
            return '0s'
        case 'random':
            return `${Math.random() * 8}s`
        case 'sequential':
            return `${(index * 0.10).toFixed(1)}s`
    }
}
