package skillswap_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import skillswap_backend.entity.SwapRequest;
import skillswap_backend.repository.SwapRequestRepository;

@Service
public class SwapRequestService {

    @Autowired
    private SwapRequestRepository swapRequestRepository;

    // Create Swap Request
    public SwapRequest createRequest(SwapRequest request) {
        request.setStatus("PENDING");
        return swapRequestRepository.save(request);
    }

    // Get All Requests
    public List<SwapRequest> getAllRequests() {
        return swapRequestRepository.findAll();
    }

    // Get Request By ID
    public SwapRequest getRequestById(Long id) {
        return swapRequestRepository.findById(id).orElse(null);
    }

    // Accept Request
    public SwapRequest acceptRequest(Long id) {
        SwapRequest request = swapRequestRepository.findById(id).orElse(null);

        if (request != null) {
            request.setStatus("ACCEPTED");
            return swapRequestRepository.save(request);
        }

        return null;
    }

    // Reject Request
    public SwapRequest rejectRequest(Long id) {
        SwapRequest request = swapRequestRepository.findById(id).orElse(null);

        if (request != null) {
            request.setStatus("REJECTED");
            return swapRequestRepository.save(request);
        }

        return null;
    }

    // Delete Request
    public String deleteRequest(Long id) {
        SwapRequest request = swapRequestRepository.findById(id).orElse(null);

        if (request != null) {
            swapRequestRepository.delete(request);
            return "Swap Request Deleted Successfully!";
        }

        return "Swap Request Not Found!";
    }
}

