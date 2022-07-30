let musics=[

    {
        id:1,
        name:"Maheroo Maheroo",
        artist:"Shreya Ghosal",
        audioSrc:"Music\02 Maheroo Maheroo (Shreya Ghoshal) Super Nani.mp3",
        imageSrc:"Downloads\Maheroo Maheroo.jpg"
    },

    {
        id:2,
        name:"Mera Pyar Tera Pyar",
        artist:"Arijit Singh",
        audioSrc:"Music\03 Mera Pyar Tera Pyar - Jalebi.mp3",
        imageSrc:"Downloads\mera pyar tera pyar.jpg"
    },

    {
        id:3,
        name:"Sawarne Lage",
        artist:"Jubin Nautiyal",
        audioSrc:"Music\02 Sawarne Lage - Mitron.mp3",
        imageSrc:"Downloads\Sawarne lage.jpg"
    },

    {
        id:4,
        name:"Khaab",
        artist:"Akhil Pasreja",
        audioSrc:"Music\Khaab-(Mr-Jatt.com).mp3",
        imageSrc:"Downloads\Khaab.jpg"
    },

    {
        id:5,
        name:"O Re Piya",
        artist:"Rahat Fateh Ali Khan",
        audioSrc:"Music\O Re Piya (Aaja Nachle) - Rahat Fateh Ali Khan 320Kbps.mp3",
        imageSrc:"Downloads\O re piya.jpg"
    }

]

for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}


function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    // document.querySelector(".audio").pause();
}