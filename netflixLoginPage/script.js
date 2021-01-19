const users=['Jagadish','Redeye','Guddu'];
const image=["url('./image//user1.png')","url('./image//user2.png')","url('./image//user3.png')"]

const memberDiv=document.querySelector('.memberDiv');
const addProfile=document.querySelector('.addIcon');

const addUser = () => {
    users.reverse();
    users.map((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin',`
            <button class='btn'><span>${curElem}</span></button>
        `);
    })
};


addUser();
addProfile.addEventListener('click',() =>{
    const userName=prompt("Enter your Username :");
    if(userName!=null && !users.includes(userName)){
        const button=document.createElement("button");
        var span = document.createElement('span');
        span.innerHTML = `${userName}`;
        button.className = 'btn';
        button.appendChild(span);
        const random = Math.floor(Math.random() * image.length);
        button.style.backgroundImage=image[random];

        addProfile.parentNode.insertBefore(button,addProfile);

    }else{
        alert("Username already exist or Invalid Username")
    }
})