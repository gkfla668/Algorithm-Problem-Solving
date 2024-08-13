function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1);
    let stack = [];
    
    for(let i = 0; i < numbers.length; i++){
        while(numbers[stack.at(-1)] < numbers[i]){
            const index = stack.pop();
            answer[index] = numbers[i];
        }
        
        stack.push(i)
    }
    
    return answer;
    
}