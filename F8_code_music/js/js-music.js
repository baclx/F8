/**
 * 1. render songs
 * 2. scroll top
 * 3. play / pause / seek (tua)
 * 4. cd rotate
 * 5. next / prev
 * 6. random
 * 7. next / repeat when ended
 * 8. active song
 * 9. scroll active song into view
 * 10. play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const app = {
    currentIndex: 0,
    songs: [
        {
            name: 'Thương em đến già',
            singer: 'Lọ Lục Bình',
            path: 'assets/music/song3.mp3',
            image: 'assets/image/png-song3.jpg'
        },
        {
            name: 'Mình yêu đến đây thôi',
            singer: 'tóc tiên',
            path: 'assets/music/song1.mp3',
            image: 'assets/image/jpg-song1.jpg'
        },
        {
            name: 'thơm',
            singer: 'hà nhi',
            path: 'assets/music/song2.mp3',
            image: 'assets/image/jpg-song2.jpg'
        },
        {
            name: 'chẳng là j của nhau',
            singer: 'unknow :D',
            path: 'assets/music/song4.mp3',
            image: 'assets/image/jpg-song4.jpg'
        }
    ],
    render: function (){
        const htmls = this.songs.map(songs =>{
            return `<div class="song">
                    <div class="thumb" style="background-image:
                    url('${songs.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${songs.name}</h3>
                        <p class="author">${songs.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                     </div>
                   </div>`
        })
        $('.playlist').innerHTML = htmls.join('')
    },
    defineProperties(){  //search define... tim hieu this.currentsong
        Object.defineProperty(this, 'currentSong', {
            get: function(){
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvent: function() {
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth;
        // console.log(cdWidth) --200 = width cd in css

        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }
    },
    loadCurrentSong: function() {
        const heading = $('header h2');
        const cdThumb = $('.cd-thumb');
        const audio = $('#audio');

        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`


        console.log(heading, cdThumb, audio)
    },
    start: function(){
        // định nghĩa các thuộc tính cho object
        this.defineProperties()

        // lắng nghe và xử lý các sự kiện ( DOM events )
        this.handleEvent()

        // tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        // render playlist
        this.render()
    }
}

app.start()
