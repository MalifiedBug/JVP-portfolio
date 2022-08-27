async function fetchimg(){
    await fetch("https://media-exp1.licdn.com/dms/image/C4D03AQGPqr6IhLkwrg/profile-displayphoto-shrink_800_800/0/1646638498682?e=2147483647&v=beta&t=pX8s3Au7SLK-V1uQDIkrKsqXJkCbvQYBi066gSyDz40")
    .then((res)=>document.write(res))
}