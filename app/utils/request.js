export default function (opt) {
    return fetch(opt.url, {
        method: opt.method || 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(opt.data || {})
    }).then((response) => response.json());
}