const bigBottomCircle = ref();
const smallBottomCircle = ref();
const bigTopCircle = ref();
const head = ref();
const arms = ref();
const legs = ref();
const leftEye = ref();
const rightEye = ref();
const mouth = ref();

const refs = [
    bigBottomCircle,
    smallBottomCircle,
    bigTopCircle,
    head,
    arms,
    legs,
    leftEye,
    rightEye,
    mouth,
];

refs.forEach((ref, index) => {
    const { variant } = useMotion(ref, {
    initial: {
        y: 100,
        opacity: 0,
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
        type: "spring",
        stiffness: 350,
        damping: 20,
        delay: index * 50,
        onComplete: () => {
            variant.value = "levitate";
        },
        },
    },
    levitate: {
        y: 15,
        transition: {
        duration: 2000,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
        },
    },
    });
});
