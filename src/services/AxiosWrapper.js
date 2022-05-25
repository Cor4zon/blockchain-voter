import axios from "axios";

class AxiosWrapper {
    constructor(path) {
        this.path = path;
    }

    get() {
        return Promise.resolve(
            axios.get( this.path )
        )
    }

    post(data) {
        return Promise.resolve(
            axios.post(
                this.path,
                data
            )
        )
    }

    delete() {
        return Promise.resolve(
            axios.delete( this.path )
        )
    }

    patch(data) {
        return Promise.resolve(
            axios.patch(
                this.path,
                data
            )
        )
    }

    // patch(data) {
    //     return Promise.resolve(
    //         axios.patch(
    //             this.path,
    //             data,
    //             {
    //                 validateStatus: function (status) {
    //                     return status < 400; // Resolve only if the status code is less than 500
    //                 }
    //             }
    //         )
    //     )
    // }
}

export default AxiosWrapper;
