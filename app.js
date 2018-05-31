var friends=['Bob', 'George', 'Henry', 'Fred', 'Loyd'];
for (let index = 0; index < friends.length; index++) {
    console.log(friends[index])
    let index1 = 98
    for (;;) { 
        var index2=index1+1
        var indexc=index1
        if (indexc==0) {
            indexc='no more'
        }
        var out=index2+' lines of code in the file,'+index2+' lines of code;'+friends[index]+' strikes one out, clears it all out,'+indexc+' lines of code in the file'
        if(index1==-1)break;
        index1--
        console.log(out)
    }
}