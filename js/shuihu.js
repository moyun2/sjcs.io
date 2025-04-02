function answerQuestion() {
    var question = document.getElementById('ai-question').value;
    if (question.trim() === '') {
        alert('请输入您的问题');
        return;
    }
    
    // 模拟AI回答 - 实际应用中这里应该是调用AI接口
    var answers = [
        "《水浒传》是中国古典英雄传奇的代表作，您的问题很有深度。",
        "关于这个问题，可以从宋江的忠义思想来分析...",
        "这个问题涉及到梁山好汉的组织结构，值得深入探讨。",
        "您的问题与水浒研究的最新进展相关。",
        "这个问题可以从宋代社会背景来理解..."
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