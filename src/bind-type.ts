type Course = {
    startDate: string;
    endDate: string;
    lessons: number;
}

type Webinar = {
    startDate: string;
    endDate: string;
    speakers: string[]
}


interface ItemType {
    course: Course;
    webinar: Webinar;
}

interface Item<T extends keyof ItemType> {
    title: string;
    description: string;
    type: T;
    metadata: ItemType[T];
}

// tell the typescript compiler that a declaration is defined somewhere else
declare function handleItem<Key extends keyof ItemType>(
    type: Key,
    handler: (item: Item<Key>) => void
): void

handleItem('course', ( item ) => {
    item.metadata.lessons
})

