    /* ハンバーガーボタンが押された状態 */

    /* <div>右上の三本線「.openbtn1」に「.active」が追加付与され、 */
    /* <nav>ナビゲーションのパネル「.navigation」に「.panelactive」が追加付与される。 */
    /* toggleClassなので、2回押したら元の状態に戻る。 */

    const ClassOpenbtn = document.querySelector('.openbtn');
    const ClassNavigation = document.querySelector('.navigation');

    function ClickOpenbtn() {
        ClassOpenbtn.classList.toggle('active');
        ClassNavigation.classList.toggle('panelactive');
    }
    ClassOpenbtn.onclick = ClickOpenbtn;