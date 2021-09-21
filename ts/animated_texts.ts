interface IWordsRandomPlaces {
    element: string;
    delay_time?: number;
    animation_duration?: number;
    direction?: Array<string>;
    force?: number;
}

function WordsRandomPlaces(defaultt: IWordsRandomPlaces) {
    // default values
    defaultt.force = defaultt.force || 300;
    defaultt.delay_time = defaultt.delay_time || 1000;
    defaultt.direction = defaultt.direction || ['x', 'y']
    defaultt.animation_duration = defaultt.animation_duration || 250;
    // end default values

    // get the text and words
    const the_text: HTMLElement = document.querySelector(defaultt.element);
    const the_text_words: Array<string> = the_text.textContent.split(' ')
    // end get the text and words

    // text processing
    the_text.innerHTML = ''
    // end text processing

    // create and configure div for each word
    the_text_words.forEach((word: string) => {
        // condition for removing divs with only whitespace
        if (word) {

            const div = document.createElement('div')
            div.innerText = word

            // div style
            div.style.margin = '0 5px 0 0'
            div.style.display = 'inline-block'
            div.style.transition = `${defaultt.animation_duration}ms cubic-bezier(0.68,-1.55,0.27,1.55)`
            div.style.transform = RandomTranslateValue(defaultt.direction, defaultt.force)
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
    }, defaultt.delay_time)
    // end set all divs to translate(0px, 0px) after choose time
}

function LettersRandomPlaces(defaultt: IWordsRandomPlaces) {
    // default values
    defaultt.force = defaultt.force || 300;
    defaultt.delay_time = defaultt.delay_time || 1000;
    defaultt.direction = defaultt.direction || ['x', 'y']
    defaultt.animation_duration = defaultt.animation_duration || 250;
    // end default values

    // get the text and words
    const the_text: HTMLElement = document.querySelector(defaultt.element);
    const the_words = the_text.innerText.split(' ')
    // end get the text and words

    // text processing
    the_text.innerHTML = ''
    // end text processing

    // create and configure div for each word
    the_words.forEach((word: any) => {

        const div = document.createElement('div')
        div.style.display = 'inline-block'
        div.style.margin = '0 5px 0 0'

        // create and configure span for each letter
        word.split('').forEach((letter: string) => {
            const span = document.createElement('span')
            span.innerText = letter

            // span style
            span.style.display = 'inline-block'
            span.style.transition = `${defaultt.animation_duration}ms cubic-bezier(0.68,-1.55,0.27,1.55)`
            span.style.transform = RandomTranslateValue(defaultt.direction, defaultt.force)
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
    }, defaultt.delay_time)
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
