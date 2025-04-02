fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk-b55cb01382df4eeca23b68e947a6bad1'
    },
    body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
            { role: 'user', content: '你好！' }
        ]
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));