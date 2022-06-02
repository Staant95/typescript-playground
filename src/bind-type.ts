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

function testCourseItem(item: Item<'course'>) {
    item.metadata.lessons
}

function testWebinarItem(item: Item<'webinar'>) {
    item.metadata.speakers;
}
