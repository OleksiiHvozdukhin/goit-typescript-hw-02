/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentsProps {
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<ComponentsProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}
// Not sure

export {};