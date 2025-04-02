function answerQuestion() {
    var question = document.getElementById('ai-question').value;
    if (question.trim() === '') {
        alert('请输入您的问题');
        return;
    }
    
    // 模拟AI回答 - 实际应用中这里应该是调用AI接口
    var answers = [
        "《红楼梦》是中国古典文学的巅峰之作，您的问题很有深度。",
        "关于这个问题，可以从贾宝玉的性格特点来分析...",
        "这个问题涉及到《红楼梦》的诗词艺术，值得深入探讨。",
        "您的问题与红学研究的最新进展相关。",
        "这个问题可以从曹雪芹的创作背景来理解..."
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