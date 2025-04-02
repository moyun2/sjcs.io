const API_KEY = 'sk-2100d88caef04e9b9afb3419fd8f06ca'; // 替换为你的API Key
const API_URL = 'https://api.deepseek.com';

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatLog = document.getElementById('chat-log');
    
    // 添加用户消息
    chatLog.innerHTML += `<div><strong>您:</strong> ${userInput}</div>`;
    
    try {
        // 调用DeepSeek API
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: userInput }
                ]
            })
        });
        
        // 检查响应状态码
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API请求失败: ${response.status} - ${errorData.error.message || '未知错误'}`);
        }
        
        const data = await response.json();
        const assistantResponse = data.choices[0].message.content;
        
        // 显示助手回复
        chatLog.innerHTML += `<div><strong>助手:</strong> ${assistantResponse}</div>`;
        chatLog.scrollTop = chatLog.scrollHeight;
    } catch (error) {
        console.error('Error calling DeepSeek API:', error);
        chatLog.innerHTML += `<div><strong>助手:</strong> 无法连接到DeepSeek API，请稍后再试。错误信息: ${error.message}</div>`;
    }
    
    document.getElementById('user-input').value = '';
}

// 按下回车键发送消息
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});