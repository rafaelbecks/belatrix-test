const parseDataWithParent = (array, withScape = false) => {
    return [...new Set(array)]
        .map(item => {
            const scape = withScape ? '| ' : '|';
            const data = item.split('|')[0];
            const parent = item.split(scape)[1];

            if (data && data !== ' ' && parent) {
                const entity = data.split(' ');
                const parentData = parent.split(' ');

                if (entity.length === 3) {
                    entity[1] = `${entity[1]} ${entity[2]}`;
                }

                return {
                    code: entity[0],
                    name: entity[1],
                    parentCode: parentData[0],
                    parentName: parentData[1],
                };
            }

            return false;
        })
        .filter(item => item);
};

const parseData = array =>
    [...new Set(array)].map(item => {
        const data = item.split(' ');
        return { code: data[0], name: data[1] };
    });

export { parseDataWithParent, parseData };
