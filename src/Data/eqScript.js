const MAX_BAR_HEIGHT = 15;

// Add the default spans
function addBarSpans() {
    const bars = document.getElementsByClassName('equalizer-bar');
    let html = '';
    for (let j = 0; j < MAX_BAR_HEIGHT; j++) {
        html += '<span></span>';
    }
    for (let i = 0; i < bars.length; i++) {
        bars[i].innerHTML = html;
    }
}

// Returns a random number between 1 and 20
function getRandomHeight(maxBarHeight) {
    return Math.round(Math.random() * (maxBarHeight - 1)) + 1;
}

// Returns the number of active spans
function getActiveSpans(spans) {
    let counter = 0;
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].style.opacity > 0) counter++;
    }
    return counter;
}

// Main programm (repeats)
function setRandomBars(maxBarHeight) {
    const bars = document.getElementsByClassName('equalizer-bar');
    for (let i = 0; i < bars.length; i++) {
        let spans = bars[i].getElementsByTagName('span');
        let activeSpanCount = getActiveSpans(spans);
        let newHeight = getRandomHeight(MAX_BAR_HEIGHT);
        for (let j = 0; j < spans.length; j++) {
            if (newHeight > activeSpanCount) {
                spans[j].style.opacity = '1';
            } else if (j > newHeight) {
                spans[j].style.opacity = '0';
            }
            // set little opacity
            let upperSpan = MAX_BAR_HEIGHT - j;
            if (newHeight > MAX_BAR_HEIGHT - 5 && upperSpan < 5) {
                spans[j].style.opacity = '0.' + upperSpan;
            }
        }
    }
}




addBarSpans();
setInterval(() => { setRandomBars(); }, 200);
