export default function iterateThroughObject(reportWithIterator) {
    let result = '';
    
    for (const category in reportWithIterator) {
        if (Object.hasOwnProperty.call(reportWithIterator, category)) {
            const employees = reportWithIterator[category];
            result += employees.join(' | ') + ' | ';
        }
    }
    
    // Removing the trailing ' | ' from the result
    result = result.slice(0, -3);
    
    return result;
}
