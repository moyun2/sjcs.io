function answerQuestion() {
    var question = document.getElementById('ai-question').value;
    if (question.trim() === '') {
        alert('请输入您的问题');
        return;
    }
    
    // 模拟AI回答 - 实际应用中这里应该是调用AI接口
    var answers = [
        "《三国演义》是中国历史小说的巅峰之作，您的问题很有深度。",
        "关于这个问题，可以从诸葛亮的智慧谋略来分析...",
        "这个问题涉及到三国鼎立的政治格局，值得深入探讨。",
        "您的问题与三国研究的最新进展相关。",
        "这个问题可以从东汉末年的社会背景来理解..."
    ];
    
    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    alert('AI助手回答:\n\n您的问题: ' + question + '\n\n回答: ' + randomAnswer);
    
    document.getElementById('ai-question').value = '';
}
    
// 允许按回车键提问
document.getElementById('ai-question').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        answerQuestion();
    }
});