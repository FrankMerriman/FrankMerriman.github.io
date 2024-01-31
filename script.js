function copyToClipboard(element) {
    const textToCopy = element.textContent;
    console.log(textToCopy);

    let re = /.*/;
    let match = re.exec(textToCopy);

    let emailStr = '';
    if (match) {
        emailStr = match[0];
    } else {
        console.log('No match found');
        return
    }

    navigator.clipboard.writeText(emailStr)
        .then(() => {
            console.log('Text copied to clipboard');
            const tooltip = document.getElementById('tooltip');
            tooltip.classList.add('show');
            setTimeout(() => {
                tooltip.classList.remove('show');
            }, 1000); // Hide the tooltip after 1 second
        })
        .catch((error) => {
            console.error('Failed to copy text to clipboard:', error);
        });
}
