package skillswap_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import skillswap_backend.entity.SwapRequest;

public interface SwapRequestRepository extends JpaRepository<SwapRequest, Long> {

}