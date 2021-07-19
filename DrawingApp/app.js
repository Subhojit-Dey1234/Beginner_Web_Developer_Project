window.addEventListener("load",function(){
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false;
    let startX = 100
    let startY = 100

    ctx.font = "100px sans-serif"
    ctx.fillText("Subhojit",startX,startY)

    function startPainting(e){
        painting = true;
    }

    function finishedPainting(e){
        painting = false
        ctx.beginPath();
        drawPaint(e);
    }

    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",finishedPainting);
    canvas.addEventListener("mousemove",drawPaint);


    function drawPaint(e){
        if(!painting) return;

        startY = e.clientY
        startX = e.clientX

        ctx.fillText("Subhojit",startX,startY)

        // ctx.fillText("Subhojit",e.clientX,e.clientY)
        // ctx.lineCap = "round";
        // ctx.lineWidth = 1;

        // ctx.lineTo(e.clientX, e.clientY);
        // ctx.stroke()
        // ctx.beginPath()
        // ctx.moveTo(e.clientX,e.clientY);
    }
})

