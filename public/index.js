const githubUser = 'kressnick25'

const repoDiv = document.querySelector('.reposList')

fetch(`https://api.github.com/users/${githubUser}/repos?sort=pushed`)
    .then((res) => {
        if (res.ok) return res.json();
        throw new Error("failed to fetch github repos");
    })
    .then(res => {
        let filteredRepos = res
            .filter((repo) => !repo.archived)
            .slice(0, 8); // limit to top 8

        repoDiv.innerHTML =
            filteredRepos
                .map(repositoryHtml)
                // .map(r => `<li>${r}</li>`)
                .reduce((a, b) => a + b)
    })
    .catch(err => console.log(err.message));

const repositoryHtml = (props) =>
    `<a href=${noXss(props.html_url)}>
        <div class='repository'>
            <h4>${noXss(props.name)}</h4>
            <p>${noXss(truncate(props.description, 150))}</p>
            <p class='updated'><small>${getPushedAtText(calcDays(props.pushed_at))}</small></p>
        </div>
    </a>`

function calcDays(pushedAt) {
    const now = new Date(Date.now());
    const pushTime = new Date(pushedAt);
    let Difference_In_Time = now.getTime() - pushTime.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Math.ceil(Difference_In_Days);
}

function getPushedAtText(days) {
    let result = `updated ${days} days ago`;
    if (days === 1) {
        result = "updated a day ago"
    } else if (days > 364) {
        result = "updated a long time ago"
    }
    return result
}

function noXss(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
}

function truncate(str, maxLength = 150) {
    if (!str) return ""
    if (str.length > maxLength) {
        return str.substring(0, maxLength - 3) + "...";
    }
    return str;
}