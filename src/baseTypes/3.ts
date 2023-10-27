let some:unknown;
some = 'Text';
let str: string;

if (typeof some == 'string') { 
    str = some;
}
else {
    window.alert('Some doesnt have a "string" type, try again');
}

export {};