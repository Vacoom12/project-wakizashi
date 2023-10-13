<script>
    import { onMount } from "svelte";
    import pb from "../lib/pocketbase";
    import QuestionBox from "../lib/QuestionBox.svelte";
    import AnswerBox from "../lib/AnswerBox.svelte";
    import { isClick } from "../lib/store";

    let allQuestions = [];
    let box = {
        question: "",
        answer1: [],
        check1: false,
        answer2: [],
        check2: false,
        answer3: [],
        check3: false,
        answer4: [],
        check4: false,
    };
    let buttonContainer = "pointer-events-auto";

    // function setAnswer(thList, engList) {
    //     for (let i = 0; i < 4; i++) {
    //         box[`answer${i + 1}`] = [engList[i], thList[i]];
    //     }
    // }

    // function setQuestion() {
    //     let index = Math.floor(Math.random() * allQuestions.length);
    //     box.question = allQuestions[index]?.hiragana

    //     let thList = ["", "", "", ""];
    //     let engList = ["", "", "", ""];
    //     let randomAnswerIndex = Math.floor(Math.random() * 4);

    //     thList[randomAnswerIndex] = allQuestions[index]?.THtranslate;
    //     engList[randomAnswerIndex] = allQuestions[index]?.ENGtranslate;
    //     box[`check${randomAnswerIndex + 1}`] = true;

    //     let wrongAnswer = allQuestions.slice(allQuestions[index]);

    //     for (let i = 0; i < 4; i++) {
    //         if (thList[i] != allQuestions[index].THtranslate) {
    //             let randomWrongAnswer = Math.floor(Math.random() * wrongAnswer.length);
    //             thList[i] = wrongAnswer[randomWrongAnswer].THtranslate;
    //             engList[i] = wrongAnswer[randomWrongAnswer].ENGtranslate;
    //         }
    //     }
    //     console.log(thList, engList)
    //     setAnswer(thList, engList);
    // }

    // async function loadQuestions() {
    //     const allList = await pb.collection("letters").getFullList();
    //     allQuestions = allList;
    //     setQuestion();
    // }

    onMount(async () => {
        // loadQuestions();
        allQuestions = await pb.collection("letters").getFullList();
        newQuestion();
    });

    function newQuestion() {
        // สุ่มคำตอบที่ถูก
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        // ข้อที่ผิด
        let posibleWrongAnswer = [1, 2, 3, 4]
        // ใสคำถาม
        box.question = allQuestions[randomIndex]?.hiragana
        // สุ่มตำแหน่งคำ
        const randomAnswerIndex = Math.floor(Math.random() * 4);
        // ใส่ตัวเลือก
        box[`answer${randomAnswerIndex + 1}`] = [allQuestions[randomIndex]?.THtranslate, allQuestions[randomIndex]?.ENGtranslate];
        box[`check${randomAnswerIndex + 1}`] = true;
        // ลบข้อที่ถูกออก
        posibleWrongAnswer = posibleWrongAnswer.filter((index) => index != randomAnswerIndex + 1);
        // เอาข้อที่ถูกออก
        const wrongAnswer = allQuestions.filter((item, index) => index != randomIndex);
        // เอาข้อที่ผิดใส่ลงใน ตัวเลือก
        posibleWrongAnswer.forEach((index) => {
            const selectWrongAnswerIndex = Math.floor(Math.random() * wrongAnswer.length);
            box[`answer${index}`] = [wrongAnswer[selectWrongAnswerIndex]?.THtranslate, wrongAnswer[selectWrongAnswerIndex]?.ENGtranslate];
            box[`check${index}`] = false;
        });

        // console.log(box)
    };

    // onMount(async () => {
    //     const allList = await pb.collection("letters").getFullList();
    //     allQuestions = allList;
    //     setQuestion();
    // })

    isClick.subscribe((value) => {
        if (value === true) {
            buttonContainer = "pointer-events-none";
        } else {
            buttonContainer = "pointer-events-auto";
            // loadQuestions();
            // setQuestion();
            newQuestion();
        }
    });
</script>

<div class="bg-red-500 w-[600px] h-[450px] flex flex-col items-center justify-center">
    <QuestionBox question={box.question} />
    <div class="grid grid-cols-2 gap-x-[120px] gap-y-8 {buttonContainer}">
        <AnswerBox answer={box.answer1} isCorrect={box.check1} />
        <AnswerBox answer={box.answer2} isCorrect={box.check2} />
        <AnswerBox answer={box.answer3} isCorrect={box.check3} />
        <AnswerBox answer={box.answer4} isCorrect={box.check4} />
    </div>
</div>
