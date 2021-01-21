$(function () {
    // gsap.to(".box_a", { // 動かす要素
    //     scrollTrigger: {
    //         trigger: ".box_a", // この要素まできたらアニメーション開始
    //         start: "top center", // ビューポート設定 画面上のどこを開始位置にするか
    //         markers: true // 検証用のマーカーを表示
    //     },
    //     left: "50%",
    //     rotation: 360,
    //     duration: 3,
    // });
    
    // gsap.to(".box_b",{
    //     scrollTrigger: {
    //         trigger: ".box_b",
    //         start: "top center",
    //         toggleActions: "play pause resume reset", // スクロールを戻したらもう一度開始させる
    //         markers: true
    //     },
    //     left: "50%",
    //     rotation: 360,
    //     duration: 3,
    //     });
    gsap.to(".scroll-move",{
        scrollTrigger: {
            trigger: ".scroll-move",
            // start: "start scrollstart",
            // end: "end scrollend",
            start: "top 200px",
            end: "900px 600px",
            scrub: true, // 要素を追従させる
            markers: false
        },
        duration: 3,
        y: 750,
        });

    ScrollTrigger.create({
        animation: tl,
        trigger: ".wrapper",
        start: "top",
        scrub: 1, // 1秒遅れて追従させる
        pin: true, // 要素を固定表示させる
        anticipatePin: 1, // ピン留めをどのくらい早く行うかを制御
    });
});
