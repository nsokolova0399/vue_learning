// Переиспользование и композиция => Пользовательские директивы
export default {
    mounted(el, bindind){
        // Dom элемент за которым необходимо следить "observer"
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting){
                bindind.value();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name:'intersection'
}