document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const dragHandle = document.querySelector('.drag-handle');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    const toggle = document.getElementById('dark-mode-toggle');
    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');


    // Load and apply dark mode preference
    chrome.storage.local.get(['darkMode'], function(result) {
        if (result.darkMode) {
            container.classList.add('dark-mode');
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'block';
        }
    });

 
    lightModeIcon.addEventListener('click', function() {
        container.classList.add('dark-mode');
        chrome.storage.local.set({ darkMode: true });
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'block';
    });

    darkModeIcon.addEventListener('click', function() {
        container.classList.remove('dark-mode');
        chrome.storage.local.set({ darkMode: false });
        lightModeIcon.style.display = 'block';
        darkModeIcon.style.display = 'none';
    });

    // Load and display count
    function updateCount() {
        chrome.storage.local.get(['count'], function(result) {
            document.getElementById('count').textContent = result.count || 0;
        });
    }


    updateCount();
    setInterval(updateCount, 1000);


    document.getElementById('increase').addEventListener('click', function() {
        chrome.storage.local.get(['count'], function(result) {
            chrome.storage.local.set({
                count: (result.count || 0) + 1
            }, updateCount);
        });
    });

    document.getElementById('decrease').addEventListener('click', function() {
        chrome.storage.local.get(['count'], function(result) {
            chrome.storage.local.set({
                count: Math.max(0, (result.count || 0) - 1)
            }, updateCount);
        });
    });


    document.getElementById('close').addEventListener('click', function() {
        window.close();
    });


    dragHandle.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        isDragging = true;
        initialX = e.clientX - container.offsetLeft;
        initialY = e.clientY - container.offsetTop;
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            container.style.left = currentX + 'px';
            container.style.top = currentY + 'px';
        }
    }

    function dragEnd() {
        isDragging = false;
    }
});
