// Sample array to sort
const array = [50, 30, 70, 10, 90, 40, 80, 20, 60,34,12,45,12,14,17,19,20,30];

// Function to create bars for sorting visualization
function createBars(containerId, arr) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    arr.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value}%`;
        bar.style.left = `${index * 30}px`;
        container.appendChild(bar);
    });
}

// Sorting Algorithms with Animation
async function bubbleSort() {
    const bars = document.querySelectorAll('#bubbleSort .bar');
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                bars[j].style.backgroundColor = 'red';
                bars[j + 1].style.backgroundColor = 'red';
                await new Promise(resolve => setTimeout(resolve, 100));
                let tempHeight = bars[j].style.height;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = tempHeight;
                bars[j].style.backgroundColor = '#3498db';
                bars[j + 1].style.backgroundColor = '#3498db';
            }
        }
        bars[bars.length - i - 1].classList.add('sorted');
    }
}

// Similar implementations for other sorting algorithms
async function insertionSort() {
    // Insertion sort logic and animation
}

async function heapSort() {
    // Heap sort logic and animation
}

async function mergeSort() {
    // Merge sort logic and animation
}

// Function to start all animations
function startAnimations() {
    createBars('bubbleSort', array);
    // createBars('insertionSort', array);
    // createBars('heapSort', array);
    // createBars('mergeSort', array);
    bubbleSort();
    // insertionSort();
    // heapSort();
    // mergeSort();
}

// Initialize the bars
document.addEventListener('DOMContentLoaded', () => {
    createBars('bubbleSort', array);
    // createBars('insertionSort', array);
    // createBars('heapSort', array);
    // createBars('mergeSort', array);
});
