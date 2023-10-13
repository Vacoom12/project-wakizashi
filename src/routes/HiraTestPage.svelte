<script>
    import { onMount } from "svelte";
    import pb from "../lib/pocketbase";
    import QuestionBox from "../lib/QuestionBox.svelte";
    import AnswerBox from "../lib/AnswerBox.svelte";
    import { isClick } from "../lib/store";
    import { testScore } from "../lib/store";

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

    // onMount(async () => {
    //     const allList = await pb.collection("letters").getFullList();
    //     allQuestions = allList;
    //     setQuestion();
    // })

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
    let resultPage = "hidden";
    let questionCount = 0;
    let scoreValue;

    testScore.subscribe((value) => {
		scoreValue = value;
	});

    onMount(async () => {
        // loadQuestions();
        allQuestions = await pb.collection("letters").getFullList();
        newQuestion();
    });

    function newQuestion() {
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        let posibleWrongAnswer = [1, 2, 3, 4]

        box.question = allQuestions[randomIndex]?.hiragana
        const randomAnswerIndex = Math.floor(Math.random() * 4);
        box[`answer${randomAnswerIndex + 1}`] = [allQuestions[randomIndex]?.THtranslate, allQuestions[randomIndex]?.ENGtranslate];
        box[`check${randomAnswerIndex + 1}`] = true;

        posibleWrongAnswer = posibleWrongAnswer.filter((index) => index != randomAnswerIndex + 1);
        const wrongAnswer = allQuestions.filter((item, index) => index != randomIndex);
        posibleWrongAnswer.forEach((index) => {
            const selectWrongAnswerIndex = Math.floor(Math.random() * wrongAnswer.length);
            box[`answer${index}`] = [wrongAnswer[selectWrongAnswerIndex]?.THtranslate, wrongAnswer[selectWrongAnswerIndex]?.ENGtranslate];
            box[`check${index}`] = false;
        });
        
        // console.log(box)
    };

    isClick.subscribe((value) => {
        if (value === true) {
            buttonContainer = "pointer-events-none";
        } else {
            buttonContainer = "pointer-events-auto";
            newQuestion();
            questionCount +=1;
            // loadQuestions();
            // setQuestion();
            // console.log(questionCount)
            // console.log(resultPage)
            // testScore.subscribe((value) => {console.log(value)})
        }
    });

    $: if (questionCount > 10) {
        resultPage = "";
    };

    function reloadPage() {
        location.reload();
    }
</script>

<div class="relative">
    <div class="absolute z-10 bg-red-500 text-white w-[400px] h-[300px] md:w-[500px] md:h-[375px] lg:w-[600px] lg:h-[450px] flex flex-col items-center justify-center rounded-xl {resultPage}">
        <h1 class="text-[42px] md:text-[50px] lg:text-[64px] mb-[25px]">TEST COMPLETED!</h1>
        <p class="text-[32px] md:text-[40px] lg:text-[54px] font-bold mb-[25px]">{scoreValue} / 10</p>
        <div class="flex flex-row">
            <button on:click={reloadPage} class="mx-10 bg-white hover:bg-gray-200 text-black p-[5px] w-[80px] h-[40px] md:[w-120] md:h-[60px] lg:w-[150px] lg:h-[75px] duration-500 rounded-xl">Reset</button>
            <a href="/" class="mx-6 bg-white hover:bg-gray-200 flex items-center justify-center text-black p-[5px] w-[80px] h-[40px] md:[w-120] md:h-[60px] lg:w-[150px] lg:h-[75px] duration-500 rounded-xl">Home</a>
        </div>
    </div>
    
    <div class="bg-red-500 w-[400px] h-[300px] md:w-[500px] md:h-[375px] lg:w-[600px] lg:h-[450px] flex flex-col items-center justify-center rounded-xl">
        <QuestionBox question={box.question} />
        <div class="grid grid-cols-2 gap-x-[120px] gap-y-8 {buttonContainer}">
            <AnswerBox answer={box.answer1} isCorrect={box.check1} />
            <AnswerBox answer={box.answer2} isCorrect={box.check2} />
            <AnswerBox answer={box.answer3} isCorrect={box.check3} />
            <AnswerBox answer={box.answer4} isCorrect={box.check4} />
        </div>
    </div>
</div>


