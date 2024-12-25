// Function to toggle fade-in and fade-out effect for output div
function showOutput() {
    const outputDiv = document.getElementById('output');
    if (outputDiv.classList.contains('hidden')) {
        outputDiv.classList.remove('hidden');
        outputDiv.style.opacity = 0;
        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.1;
            outputDiv.style.opacity = opacity;
            if (opacity >= 1) clearInterval(fadeIn);
        }, 50);
    } else {
        let opacity = 1;
        const fadeOut = setInterval(() => {
            opacity -= 0.1;
            outputDiv.style.opacity = opacity;
            if (opacity <= 0) {
                clearInterval(fadeOut);
                outputDiv.classList.add('hidden');
            }
        }, 50);
    }
}

// Add a copy button to each <code> block and implement copy functionality
document.addEventListener("DOMContentLoaded", () => {
    const codeBlocks = document.querySelectorAll("code");

    codeBlocks.forEach((codeBlock) => {
        // Wrap code content in a span to exclude the button from being copied
        const codeContent = document.createElement('span');
        codeContent.classList.add('code-content');
        codeContent.innerText = codeBlock.innerText.trim(); // Ensure proper formatting
        codeBlock.innerHTML = ''; // Clear original content
        codeBlock.appendChild(codeContent);

        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-btn');

        // Add icon to the button
        const copyIcon = document.createElement('span');
        copyIcon.classList.add('copy-icon'); // Ensure this is styled in your CSS
        copyButton.appendChild(copyIcon);

        // Add text to the button
        const copyText = document.createElement('span');
        copyText.classList.add('copy-text');
        copyText.innerText = 'Copy code';
        copyButton.appendChild(copyText);

        codeBlock.appendChild(copyButton);

        // Add event listener for copying code
        copyButton.addEventListener('click', () => {
            // Use the span content only (excluding the button)
            const codeText = codeContent.innerText;

            // Create a temporary textarea element to hold the code content
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = codeText;
            document.body.appendChild(tempTextArea);

            // Select and copy the text inside the textarea
            tempTextArea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextArea);

            // Optional: Show a message when content is copied
            copyText.innerText = 'Copied!';
            setTimeout(() => {
                copyText.innerText = 'Copy code';
            }, 1500); // Reset button text after 1.5 seconds
        });
    });
});
