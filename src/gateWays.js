
const baseUrl = 'https://crudcrud.com/api/55d8c1a8a0c24bc9a107a8b22005b40d/events'

export const fetchEvents = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(eventsList => eventsList
            .map(({ _id, ...rest }) => ({ ...rest, id: _id })));
};

export const fetchOneEvent = id => {
    return fetch(`${baseUrl}/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Internal Server Error. Can't display events");
        })
        .then(({ _id, ...rest }) => ({ ...rest, id: _id }));
};

export const saveEvent = eventData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(eventData),
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Internal Server Error. Can't save event");
        })
        .then(({ _id, ...rest }) => ({ ...rest, id: _id }));
};

export const deleteEvent = eventId => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE'
    })
};