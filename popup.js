document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const dragHandle = document.querySelector('.drag-handle');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;

    // Load and display count
    function updateCount() {
        chrome.storage.local.get(['count'], function(result) {
            document.getElementById('count').textContent = result.count || 0;
        });
    }

    // Update count every second
    updateCount();
    setInterval(updateCount, 1000);

    // Increment/Decrement buttons
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

    // Close button
    document.getElementById('close').addEventListener('click', function() {
        window.close();
    });

    // Dragging functionality
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
