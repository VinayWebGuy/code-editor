$(document).ready(function() {
    const editor = document.getElementById('myEditor');
    const runButton = document.getElementById('run');
    const outputArea = document.getElementById('outputArea');
    
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    editor.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault();
        document.execCommand('insertText', false, '\t');
      }
    });
    
    runButton.addEventListener('click', function() {
      const code = editor.innerText;
      
      // Load the code into the iframe
      iframe.contentDocument.open();
      iframe.contentDocument.write(code);
      iframe.contentDocument.close();
      
      // Capture the iframe's rendered content
      const output = iframe.contentDocument.body.innerHTML;
      
      // Display the output in the output area
      outputArea.innerHTML = output;
    });
  });
  