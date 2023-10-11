<script>
    import { onMount } from "svelte";
    import pb from "../lib/pocketbase";
    import QuestionBox from "../lib/QuestionBox.svelte";
    import AnswerBox from "../lib/AnswerBox.svelte";

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

    function setAnswer(thList, engList) {
        for (let i = 0; i < 4; i++) {
            box[`answer${i + 1}`] = [thList[i], engList[i]];
        }
    }

    function setQuestion() {
        let index = Math.floor(Math.random() * allQuestions.length);
        box.question = allQuestions[index].hiragana;

        let thList = ['', '', '', ''];
        let engList = ['', '', '', ''];
        let randomAnswerIndex = Math.floor(Math.random() * 4)

        thList[randomAnswerIndex] = allQuestions[index].THtranslate;
        engList[randomAnswerIndex] = allQuestions[index].ENGtranslate;
        box[`check${randomAnswerIndex + 1}`] = true;

        let wrongAnswer = allQuestions.slice(allQuestions[index]);

        for (let i = 0; i < 4; i++) {
            if (thList[i] != allQuestions[index].THtranslate) {
                let randomWrongInedx = Math.floor(Math.random() * wrongAnswer.length)
                thList[i] = wrongAnswer[randomWrongInedx].THtranslate;
                engList[i] = wrongAnswer[randomWrongInedx].ENGtranslate;
            }
        }

        setAnswer(thList, engList)

        console.log(box);
    }

    onMount(async () => {
        const allList = await pb.collection("letters").getFullList();
        allQuestions = allList;

        setQuestion();
    });
</script>

<div class="bg-red-500 w-[600px] h-[450px] flex flex-col items-center justify-center">
    <QuestionBox question={box.question} />
    <div class="grid grid-cols-2 gap-x-[120px] gap-y-8">
        <AnswerBox answer={box.answer1} isCorrect={box.check1}/>
        <AnswerBox answer={box.answer2} isCorrect={box.check2}/>
        <AnswerBox answer={box.answer3} isCorrect={box.check3}/>
        <AnswerBox answer={box.answer4} isCorrect={box.check4}/>
    </div>
</div>
