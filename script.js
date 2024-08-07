const tweetId = '1821129857994207255';

// Phương pháp 1: Sử dụng Twitter Widget
window.onload = function() {
    twttr.widgets.createTweet(
        tweetId,
        document.getElementById('tweet'),
        {
            align: 'center'
        }
    );
};

// Phương pháp 2: Sử dụng API call (không khuyến nghị cho production)
const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = `https://api.twitter.com/2/tweets/${tweetId}?tweet.fields=public_metrics`;

async function getRetweetCount() {
    try {
        const response = await fetch(corsProxy + apiUrl, {
            headers: {
                'Authorization': 'Bearer YOUR_BEARER_TOKEN' // Thay thế bằng token thực của bạn
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from Twitter API');
        }

        const data = await response.json();
        const retweetCount = data.data.public_metrics.retweet_count;

        document.getElementById('retweetCount').textContent = retweetCount;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('retweetCount').textContent = 'Error fetching data';
    }
}

getRetweetCount();