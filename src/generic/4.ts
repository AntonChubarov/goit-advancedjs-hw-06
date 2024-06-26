interface Properties {
  position: number
}

class Component<T extends Properties> {
  constructor(public props: T) {}
}

interface PageProperties extends Properties {
  title: string;
}

class Page extends Component<PageProperties> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
