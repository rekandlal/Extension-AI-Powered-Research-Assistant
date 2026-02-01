document.addEventListener('DOMContentLoaded', () => {
    const processBtn = document.getElementById('processBtn');
    const saveNotesBtn = document.getElementById('saveNotesBtn');
    const clearBtn = document.getElementById('clearBtn');
    const notesArea = document.getElementById('notes');
    const operationSelect = document.getElementById('operationSelect');

    // Load saved notes
    chrome.storage.local.get(['researchNotes'], (result) => {
        if (result.researchNotes) notesArea.value = result.researchNotes;
    });

    // Event listeners or different operation hai perform karne ke liye
     processBtn.addEventListener('click', processText);
    saveNotesBtn.addEventListener('click',  saveNotes);
    clearBtn.addEventListener('click',  clearResults);

    
    operationSelect.addEventListener('change', (e) => {
        const ops = {
             'summarize': '🚀 Summarize Text',
            'explain': '💡 Explain Simply', 
            'keywords' : '🔑 Extract Keywords',
            'suggest': '💭 Suggest Topics',
            'translate': '🌐 Translate Text',
            'sentiment': '😊 Analyze Sentiment',
            'qa': '❓ Generate Q&A',
            'steps' : '📋 Create Steps'
        };
        processBtn.innerHTML = ops[e.target.value] || '🚀 Process Text';
    });
});
