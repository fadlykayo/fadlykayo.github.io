// Pseudocode my_game_fadly.js

/*
INIT "player" object = FUNCTION() {
  property "name" = "";
  property "job" = "";
  property "personality" = "";
  methods "classInfo" = FUNCTION(job1)
    IF job.toLowerCase() = "brawler"
      OUTPUT Kamu adalah tipe penyerang jarak dekat. Kamu seorang yang pemberani. Kemampuan fisikmu melibihi orang lain.
    ELSEIF job.toLowerCase() = "ranger"
      OUTPUT Kamu adalah tipe penyerang jarak jauh. Kamu seorang yang cekatan. Ketepatan dan kecepatanmu dalam menembak sangat tinggi.
    ELSE
      OUTPUT Kamu adalah seorang penyembuh. Kehadiranmu sangat dibutuhkan banyak orang. Kamu dapat menolong orang yang terluka dengan kemampuanmu.
    ENDIF
  methods "charInfo" = FUNCTION(personal1)
    IF personality.toLowerCase() = "emotional"
      OUTPUT Kamu adalah seseorang yang emosional. Kamu mengandalkan perasaanmu dalam bertindak, berkata dan berpikir.
    ELSEIF personality.toLowerCase() = "thinking"
      OUTPUT Kamu adalah seorang pemikir. Kamu melakukan banyak pertimbangan dan rencana-rencana sebelum kamu melakukan sesuatu.
    ELSE
      OUTPUT Kamu adalah seseorang yang instingtual. Tindakan, perkataan dan keputusan yang kamu ambil didasarkan pada insting spontanmu saat itu.
    ENDIF
ENDFUNCTION

INIT "player1" object as new "player" object
INPUT user input a name
STORE the user's input in "name" property of "player" object

OUTPUT "Welcome to the Virtual World " + "name" property of "player1" object + ". From now on, you are going to confront
some series of choices to customize your own story ending. You are going to find out
what kind of class/job you are end up with and your personalities. Let's go!"

INIT "brawler", "ranger", "healer" variables

IF brawler > ranger & brawler > healer THEN
  "job" property of "player1" object = "Brawler"
ELSE IF  ranger > brawler & ranger > healer  THEN
  "job" property of "player1" object = "Ranger"
ELSE
  "job" property of "player1" object = "Healer"
ENDIF

INIT "emotional", "thinking", "instinctual" variables

IF emotional > thinking & emotional > instinctual THEN
  "personality" property of "player" object = "Emotional"
ELSE IF  thinking > emotional & thinking > instinctual THEN
  "personality" property of "player" object = "Thinking"
ELSE
  "personality" property of "player" object = "Instinctual"
ENDIF

FUNCTION jawaban1()
 INPUT user input an answer
 STORE the user's input in "input" variable
 IF input = 1 THEN
   instinct++
 ELSE IF input = 2 THEN
   emotional++
 ELSE
   thinking++
 ENDIF
ENDFUNCTION

FUNCTION jawaban2()
 INPUT user input an answer
 STORE the user's input in "input" variable
 IF input = 1 THEN
   brawler++
 ELSE IF input = 2 THEN
   ranger++
 ELSE
   healer++
 ENDIF
ENDFUNCTION

FUNCTION pertanyaan1()
  OUTPUT Saat kamu membuka matamu, kamu berada di tengah keramaian. Banyak orang-orang di
  sekitar mu yang berjualan dan berteriak-teriak. Kamu berada di tengah keramaian pasar!
  Apa yang akan kamu lakukan pertama kali?
  INIT "ask1" array = ["Melihat sekeliling dan pergi ke mana instingmu menuntunmu",
  "Kamu merasa khawatir karena kamu tidak tau di mana kamu berada. Kamu menghampiri salah satu pedagang dan bertanya-tanya kepadanya",
  "Kamu mengamati keadaanmu dan sekitar, lalu merencanakan dengan matang apa yang akan kamu lakukan berikutnya"]
  FOR 0 <= i < ask1.length
    INIT j = i+1
    OUTPUT j + ". " + ask1[i]
  ENDFOR
ENDFUNCTION

FUNCTION pertanyaan2()
  OUTPUT Setelah kamu mendapatkan informasi, ternyata kamu berada di kota bernama Lorden yang merupakan ibu kota dari kerajaan Lorsania.
  Karena kamu menghabiskan banyak waktu untuk mencari informasi, perutmu terasa lapar. Namun kamu tidak memiliki uang.
  Apa yang akan kamu lakukan selanjutnya?
  INIT "ask2" array = ["Kamu melihat seseorang lewat di depan mu dan menggiring tanduk monster. Kamu pergi ke luar gerbang kota dan ikut berburu monster.",
  "Kamu merasa takut untuk pergi berburu karena kamu tidak mempunyai senjata. Kamu menghampiri seseorang dan meminta tolong kepadanya.",
  "Kamu tahu ada banyak monster di luar gerbang kota. Tetapi kamu pergi menyiapkan senjata terlebih dahulu sebelum pergi berburu. Ada banyak senjata tidak terpakai di jalanan."]
  FOR 0 <= i < ask2.length
    INIT j = i+1
    OUTPUT j + ". " + ask2[i]
  ENDFOR
ENDFUNCTION

FUNCTION pertanyaan3()
  OUTPUT Setelah kamu sampai di luar. Kamu di hampiri oleh seseorang yang baik hati dan menawarkanmu 3 macam senjata: pedang, panah dan tongkat penyembuh.
  Senjata mana yang kamu pilih?
  INIT "ask3" array = ["Pedang", "Panah", "Tongkat Penyembuh"]
  FOR 0 <= i < ask3.length
    INIT j = i+1
    OUTPUT j + ". " + ask3[i]
  ENDFOR
ENDFUNCTION

FUNCTION pertanyaan4()
  OUTPUT Setelah beberapa lama kamu berburu, kamu melihat keramaian di kejauhan dan banyak orang yang melarikan diri.
  Ternyata ada monster raksasa (boss) yang sedang mengamuk ke arah kota. Apa yang akan kamu lakukan?
  INIT "ask4" array = ["Kamu menerjang keramaian dan menuju ke arah monster tersebut dan berupaya untuk menghalaunya.",
  "Kamu pergi menuju ke arah monster tersebut sambil mengambil jarak aman dan mulai menyerang monster tersebut dari kejauhan.",
  "Kamu menghampiri orang-orang yang terluka dan menyembuhkannya."]
  FOR 0 <= i < ask4.length
    INIT j = i+1
    OUTPUT j + ". " + ask4[i]
  ENDFOR
ENDFUNCTION

FUNCTION pertanyaan5()
  OUTPUT Kamu dan banyak orang lainnya berhasil menghalau monster tersebut dari kota. Banyak orang menghampirimu dan berterima kasih kepadamu atas pertolonganmu.
  Kamu sekarang lelah setelah lama berburu. Apa yang akan kamu lakukan selanjutnya?
  INIT "ask5" array =  ["Kamu mencium bau harum yang muncul dari dalam kota. Kamu pergi mencari sumber bau harum tersebut.",
  "Kamu menghampiri orang-orang yang turut membantu menghalau monster tadi dan mengucapkan terima kasih kepada mereka. Kamu merasa tanpa bantuan mereka kamu tidak akan selamat. Kamu merasa sangat senang dan ingin berkenalan dengan mereka sejenak.",
  "Kamu mengumpulkan hasil buruanmu dan mulai menghitungnya, lalu kamu pergi ke kota untuk menjualnya dan berencana untuk mencari makan setelah itu."]
  FOR 0 <= i < ask5.length
    INIT j = i+1
    OUTPUT j + ". " + ask5[i]
  ENDFOR
ENDFUNCTION

RUN/COMPUTE pertanyaan1()
RUN pertanyaan1()
RUN jawaban1()
RUN pertanyaan2()
RUN jawaban1()
RUN pertanyaan3()
RUN jawaban2()
RUN pertanyaan4()
RUN jawaban2()
RUN pertanyaan5()
RUN jawaban1()

OUTPUT "Terima kasih " + "name" property of "player1" object + " atas partisipasimu memainkan Part 1 dari game ini."
OUTPUT Berdasarkan hasil sementara, inilah informasi mengenai dirimu:
OUTPUT "Class kamu adalah " + "job" property of "player1" object + ". " + player1.classInfo(player1.job))
OUTPUT "Kamu adalah tipe personality: " + "personality" property of "player1" object + ". " + player1.charInfo(player1.personality))
*/
